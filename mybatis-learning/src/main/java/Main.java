import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import datasource.DBCPDataSource;
import datasource.MyBatisDataSource;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.mapping.Environment;
import org.apache.ibatis.session.Configuration;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import bean.User;
import mapper.UserMapper;
import org.apache.ibatis.transaction.TransactionFactory;
import org.apache.ibatis.transaction.jdbc.JdbcTransactionFactory;
import org.junit.Test;

import javax.sql.DataSource;

@Slf4j
public class Main {

    @Test
    public void test_01() throws IOException {
        SqlSessionFactoryBuilder sqlSessionFactoryBuilder = new SqlSessionFactoryBuilder();
        SqlSessionFactory sessionFactory;

        sessionFactory = sqlSessionFactoryBuilder.build(
                Resources.getResourceAsReader("mybatis-config.xml"),
                "development"  // 这个参数可以省略，因为 mybatis-config.xml 的<environments>标签指定了默认环境为development
        );

        SqlSession sqlSession = sessionFactory.openSession();

        // 以上是样板代码
        // 以下是「业务逻辑」

        try {
            UserMapper userMapper = sqlSession.getMapper(UserMapper.class);
            User user = userMapper.findById(1L);
            log.info("{}", user);
        } finally {
            sqlSession.close();
        }
    }

    @Test
    public void test_02() throws IOException{
        SqlSessionFactoryBuilder builder=new SqlSessionFactoryBuilder();
        SqlSessionFactory factory=builder.build(
                Resources.getResourceAsReader("mybatis-config-dbcp.xml"),
                "development");

        SqlSession sqlSession=factory.openSession();
        try {
            UserMapper userMapper = sqlSession.getMapper(UserMapper.class);
            User user = userMapper.findById(1L);
            log.info("{}", user);
        }finally {
            sqlSession.close();
        }
    }

    @Test
    /**
     * 使用 DataSource 类链接数据库
     */
    public void test_03() {
//        DataSource dataSource = MyBatisDataSource.get();
        DataSource dataSource= DBCPDataSource.get();
        TransactionFactory transactionFactory = new JdbcTransactionFactory();
        Environment environment = new Environment("development", transactionFactory, dataSource);
        Configuration configuration = new Configuration(environment);
        configuration.addMapper(UserMapper.class);
        SqlSessionFactory sessionFactory = new SqlSessionFactoryBuilder().build(configuration);

        SqlSession sqlSession = sessionFactory.openSession();
        try {
            UserMapper userMapper = sqlSession.getMapper(UserMapper.class);
            User user = userMapper.findById(1L);
            log.info("{}", user);
        } finally {
            sqlSession.close();
        }
    }

    @Test
    /**
     * 查询密码为 123 的 user
     */
    public void test_04() throws IOException{
        SqlSessionFactoryBuilder builder=new SqlSessionFactoryBuilder();
        SqlSessionFactory factory=builder.build(
                Resources.getResourceAsReader("mybatis-config-dbcp.xml"),
                "development");

        SqlSession sqlSession=factory.openSession();
        try {
            UserMapper userMapper = sqlSession.getMapper(UserMapper.class);
            List<User> user = userMapper.findByPassword("1234");
            log.info("{}", user);
        }finally {
            sqlSession.close();
        }
    }

    @Test
    public void test_05() throws IOException{
        SqlSessionFactory factory=
                new SqlSessionFactoryBuilder().build(
                Resources.getResourceAsReader("mybatis-config.xml"),
                "development");
        SqlSession sqlSession=factory.openSession();
        try {
            UserMapper userMapper=sqlSession.getMapper(UserMapper.class);
            User user1=userMapper.findByNameAndPasswordV1("kwm","123");
            User user2=userMapper.findByNameAndPasswordV2("kwm","123");
            Map<String, Object> data=new HashMap<String, Object>();
            data.put("username","kwm");
            data.put("password","123");
            User user3=userMapper.findByNameAndPasswordV3(data);

            Map<String, Object> data4=new HashMap<String, Object>();
            data4.put("username","kwm");
            User user4=userMapper.findByNameAndPasswordV4(data4,"123");

            Map<String, Object> data5=new HashMap<String, Object>();
            data5.put("username","kwm");
            User user5=userMapper.findByNameAndPasswordV5(data5,"123");

            User targetUser=new User();
            targetUser.setName("kwm");
            targetUser.setPassword("123");
            User user6=userMapper.findByNameAndPasswordV6(targetUser);

            User user7=userMapper.findByNameAndPasswordV7(targetUser);
            log.info("user1:{}",user1);
            log.info("user2:{}",user2);
            log.info("user3:{}",user3);
            log.info("user4:{}",user4);
            log.info("user5:{}",user5);
            log.info("user6:{}",user6);
            log.info("user7:{}",user7);
        }finally {
            sqlSession.close();
        }
    }

    @Test
    public void test_06() throws IOException{
        SqlSessionFactory factory=new SqlSessionFactoryBuilder().build(
                Resources.getResourceAsReader("mybatis-config.xml"),
                "development"
        );
        SqlSession sqlSession=factory.openSession();
        try {
            UserMapper userMapper=sqlSession.getMapper(UserMapper.class);
            List<User> users=userMapper.listUsersByPassword("123","id asc");
            log.info("users:{}",users);
        }finally {
            sqlSession.close();
        }
    }

    @Test
    public void test_07() throws IOException{
        SqlSessionFactory factory=new SqlSessionFactoryBuilder().build(
                Resources.getResourceAsReader("mybatis-config.xml"),
                "development"
        );
        SqlSession sqlSession=factory.openSession();
        try {
            UserMapper userMapper=sqlSession.getMapper(UserMapper.class);
            User user=new User();
            user.setName("testName");
            user.setId(111L);
            user.setPassword("111test");
            user.setEmail("uasyasuays@qq.com");
            int resultRows=userMapper.saveOneUser(user);
            log.info("results:{}",resultRows);
            sqlSession.commit();
        }finally {
            sqlSession.close();
        }
    }

    @Test
    public void test_08() throws IOException{
        SqlSessionFactory factory=new SqlSessionFactoryBuilder().build(
                Resources.getResourceAsReader("mybatis-config.xml"),
                "development"
        );
        SqlSession sqlSession=factory.openSession();
        try {
            UserMapper userMapper=sqlSession.getMapper(UserMapper.class);
//            User user=userMapper.findByName("kwm","1234");
            User user=userMapper.findByName("kwm",null);
            log.info("user:{}",user);
        }finally {
            sqlSession.close();
        }
    }
}
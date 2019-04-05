package datasource;

import org.apache.commons.dbcp2.BasicDataSource;

import javax.sql.DataSource;

public class DBCPDataSource {
    public static DataSource get(){
        BasicDataSource dataSource=new BasicDataSource();
        dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
        dataSource.setMaxIdle(10);
        dataSource.setMinIdle(6);
        dataSource.setUsername("kwm");
        dataSource.setPassword("111kwm");
        dataSource.setUrl("jdbc:mysql://127.0.0.1:3306/blog_db?serverTimezone=GMT%2B8&useSSL=false&useUnicode=true&characterEncoding=utf8");
        return dataSource;
    }
}

package datasource;

import org.apache.ibatis.datasource.pooled.PooledDataSource;

import javax.sql.DataSource;

public class MyBatisDataSource {

    public static DataSource get() {
        PooledDataSource dataSource = new PooledDataSource();
        dataSource.setUsername("kwm");
        dataSource.setPassword("111kwm");
        dataSource.setUrl("jdbc:mysql://127.0.0.1:3306/blog_db?serverTimezone=GMT%2B8&useSSL=false&useUnicode=true&characterEncoding=utf8");
        dataSource.setDriver("com.mysql.cj.jdbc.Driver");
        dataSource.setPoolMaximumActiveConnections(100);
        dataSource.setPoolMaximumIdleConnections(8);
        return dataSource;
    }

}
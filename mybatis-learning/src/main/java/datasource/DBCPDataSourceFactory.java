package datasource;

import org.apache.commons.dbcp2.BasicDataSource;
import org.apache.ibatis.datasource.DataSourceFactory;

import javax.sql.DataSource;
import java.util.Properties;

public class DBCPDataSourceFactory implements DataSourceFactory {
    private String username;
    private String password;
    private String driver;
    private String url;
    private int initialSize = 6;
    private int maxIdle = 8;
    private int minIdle = 6;

    public void setProperties(Properties properties) {
        username = properties.getProperty("username");
        password = properties.getProperty("password");
        driver = properties.getProperty("driver");
        url = properties.getProperty("url");

        initialSize = Integer.valueOf(properties.getProperty("initialSize", "" + initialSize));
        maxIdle = Integer.valueOf(properties.getProperty("maxIdle", "" + maxIdle));
        minIdle = Integer.valueOf(properties.getProperty("minIdle", "" + minIdle));
    }

    public DataSource getDataSource() {
        BasicDataSource dataSource = new BasicDataSource();
        dataSource.setUsername(username);
        dataSource.setPassword(password);
        dataSource.setUrl(url);
        dataSource.setDriverClassName(driver);
        dataSource.setInitialSize(initialSize);
        dataSource.setMaxIdle(maxIdle);
        dataSource.setMinIdle(minIdle);
        return dataSource;
    }
}

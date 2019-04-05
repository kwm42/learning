package learning12;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;

public class UserJDBCTemplate implements UserDAO {
	private DataSource dataSource;
	private JdbcTemplate jdbcTemplateObject;

	@Override
	public void setDataSource(DataSource ds) {
		this.dataSource = ds;
		this.jdbcTemplateObject = new JdbcTemplate(dataSource);
	}

	@Override
	public void create(String name, String password) {
		String SQL = "insert into user (name, password) values (?, ?)";
		jdbcTemplateObject.update(SQL, name, password);
		System.out.println("Created Record Name = " + name + " Age = " + password);
		return;
	}

	@Override
	public User getStudent(Integer id) {
		String SQL = "select * from user where id = ?";
		User user = jdbcTemplateObject.queryForObject(SQL, new Object[] { id }, new UserMapper());
		return user;
	}

	@Override
	public List<User> listStudents() {
		String SQL = "select * from user";
		List<User> users = jdbcTemplateObject.query(SQL, new UserMapper());
		return users;
	}

	@Override
	public void delete(Integer id) {
		String SQL = "delete from user where id = ?";
		jdbcTemplateObject.update(SQL, id);
		System.out.println("Deleted Record with ID = " + id);
		return;
	}

	@Override
	public void update(Integer id, String name) {
		String SQL = "update user set name = ? where id = ?";
		jdbcTemplateObject.update(SQL, name, id);
		System.out.println("Updated Record with ID = " + id);
		return;
	}

}

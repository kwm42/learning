package learning12;

import java.util.List;
import javax.sql.DataSource;

public interface UserDAO {
   
   public void setDataSource(DataSource ds);
   
   public void create(String name, String password);
   
   public User getStudent(Integer id);
   
   public List<User> listStudents();
   
   public void delete(Integer id);
   
   public void update(Integer id, String name);
}
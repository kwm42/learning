package learning12;

import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {
	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("learning12/Beans.xml");
		UserJDBCTemplate userJDBCTemplate = (UserJDBCTemplate) context.getBean("userJDBCTemplate");
		System.out.println("------Records Creation--------");
		userJDBCTemplate.create("Zara", "111Zara");
		userJDBCTemplate.create("Nuha", "111Nuha");
		userJDBCTemplate.create("Ayan", "111Ayan");
		System.out.println("------Listing Multiple Records--------");
		List<User> users = userJDBCTemplate.listStudents();
		for (User record : users) {
			System.out.print("ID : " + record.getId());
			System.out.print(", Name : " + record.getName());
			System.out.println(", Password : " + record.getPassword());
		}
		System.out.println("----Updating Record with ID = 2 -----");
		userJDBCTemplate.update(2, "kwm");
		System.out.println("----Listing Record with ID = 2 -----");
		User user= userJDBCTemplate.getStudent(2);
		System.out.print("ID : " + user.getId());
		System.out.print(", Name : " + user.getName());
		System.out.println(", Password : " + user.getPassword());
	}
}

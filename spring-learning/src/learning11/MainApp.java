package learning11;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import learning11.Student;

public class MainApp {
	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("learning11/Beans.xml");
		Student student = (Student) context.getBean("student");
		student.getName();
		student.getAge();
	}
}	

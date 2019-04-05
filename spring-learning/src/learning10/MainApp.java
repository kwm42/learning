package learning10;

import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {
	public static void main(String[] args) {
		ClassPathXmlApplicationContext context = 
				new ClassPathXmlApplicationContext("learning10/Beans.xml");
		Student student = (Student) context.getBean("student");
		student.getName();
		student.getAge();
//		student.printThrowException();
		context.registerShutdownHook();
	}
}

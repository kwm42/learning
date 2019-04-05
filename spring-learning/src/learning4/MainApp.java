package learning4;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

public class MainApp {

	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("learning4/Beans.xml");

		HelloWorld objA = (HelloWorld) context.getBean("helloWorld");

		objA.getMessage1();
		objA.getMessage2();

		HelloChina objB = (HelloChina) context.getBean("helloChina");
		objB.getMessage1();
		objB.getMessage2();
		objB.getMessage3();
	}
}

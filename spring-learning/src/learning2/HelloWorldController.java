package learning2;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

public class HelloWorldController {

	public static void main(String[] args) {
		ApplicationContext context=new ClassPathXmlApplicationContext("learning2/Beans.xml");
		HelloWorld helloWorld1=(HelloWorld)context.getBean("helloWorld");
		helloWorld1.setMessage("I'm HelloWorld1");
		HelloWorld helloWorld2=(HelloWorld)context.getBean("helloWorld");
		System.out.println(helloWorld1);
		System.out.println(helloWorld2);
	}
}

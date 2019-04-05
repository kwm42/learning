package learning3;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

public class HelloWorldController {

	public static void main(String[] args) {
		AbstractApplicationContext context=new ClassPathXmlApplicationContext("learning3/Beans.xml");
		HelloWorld helloWorld=(HelloWorld)context.getBean("helloWorld");
		System.out.println(helloWorld);
		context.registerShutdownHook();
	}
}

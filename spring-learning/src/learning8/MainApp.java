package learning8;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {
	public static void main(String[] args) {
//		ApplicationContext context = new ClassPathXmlApplicationContext("learning8/Beans.xml");
		AnnotationConfigApplicationContext context=
				new AnnotationConfigApplicationContext();
		context.register(HelloWorld.class);
		context.register(CarConfiguration.class);
		context.refresh();
		HelloWorld helloWorld=(HelloWorld)context.getBean("helloWorld");
		Car car=(Car)context.getBean("car");
		
		System.out.println(helloWorld);
		System.out.println(car);
		
		context.registerShutdownHook();
	}
}

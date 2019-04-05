package learning9;

import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {
	public static void main(String[] args) {
		ConfigurableApplicationContext context = new ClassPathXmlApplicationContext("learning9/Beans.xml");

		// Let us raise a start event.
		context.start();

		HelloWorld obj = (HelloWorld) context.getBean("helloWorld");

		obj.getMessage();

		// Let us raise a stop event.
		context.stop();

		ConfigurableApplicationContext applicationContext = 
				new ClassPathXmlApplicationContext("learning9/Beans.xml");
		CustomEventPublisher cvp = 
				(CustomEventPublisher) applicationContext.getBean("customEventPublisher");
		cvp.publish();
		cvp.publish();
	}
}
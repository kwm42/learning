package learning1;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("learning1")
public class HelloWorldController {

	public static void main(String[] args) {
		ApplicationContext context=new ClassPathXmlApplicationContext("learning1/Beans.xml");
		HelloWorld helloWorld=(HelloWorld)context.getBean("helloWorld");
		System.out.println(helloWorld);
	}
}

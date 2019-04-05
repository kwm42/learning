package learning6;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("learning1")
public class MainApp {

	public static void main(String[] args) {
		ApplicationContext context=new ClassPathXmlApplicationContext("learning6/Beans.xml");
		CollectionInjection injection=(CollectionInjection)context.getBean("collectionInjection");
		System.out.println(injection);
	}
}

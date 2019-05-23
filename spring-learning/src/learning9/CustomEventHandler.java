package learning9;

import org.springframework.context.ApplicationListener;

public class CustomEventHandler implements ApplicationListener<CustomEvent> {
	public void onApplicationEvent(CustomEvent event) {
		System.out.println(event.toString());
	}
}
package learning8;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class HelloWorld {
	private String message;

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public HelloWorld(String message) {
		super();
		this.message = message;
	}

	public HelloWorld() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "HelloWorld [message=" + message + "]";
	}
	
	@Bean
	public HelloWorld helloWorld() {
		return new HelloWorld("hello world");
	}
}

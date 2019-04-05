package learning8;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

@Configuration
public class CarConfiguration {
	@Bean(initMethod = "init",destroyMethod = "destroy")
	@Scope("singleton")
	public Car car() {
		return new Car("½Î³µ",new Wheel(100));
	}
	@Bean
	public Wheel wheel() {
		return new Wheel(10);
	}
}

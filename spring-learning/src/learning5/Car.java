package learning5;

public class Car {
	private String name;
	private Wheel wheel;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Wheel getWheel() {
		return wheel;
	}
	public void setWheel(Wheel wheel) {
		this.wheel = wheel;
	}
	@Override
	public String toString() {
		return "Car [name=" + name + ", wheel=" + wheel + "]";
	}
	public Car(String name, Wheel wheel) {
		super();
		this.name = name;
		this.wheel = wheel;
	}
	public Car() {
		super();
		// TODO Auto-generated constructor stub
	}

	
}

package learning2;

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
	
	public void init() {
		System.out.println("init method...");
	}
	
	public void destroy() {
		System.out.println("destroy method...");
	}
}

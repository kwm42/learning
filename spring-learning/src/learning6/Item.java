package learning6;

public class Item {
	private String name;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "Item [name=" + name + "]";
	}

	public Item(String name) {
		super();
		this.name = name;
	}

	public Item() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}

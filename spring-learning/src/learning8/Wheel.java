package learning8;

public class Wheel {
	private int size;

	public Wheel(int size) {
		super();
		this.size = size;
	}

	public Wheel() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getSize() {
		return size;
	}

	@Override
	public String toString() {
		return "Wheel [size=" + size + "]";
	}

	public void setSize(int size) {
		this.size = size;
	}
	
}

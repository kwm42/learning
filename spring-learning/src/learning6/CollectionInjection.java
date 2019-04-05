package learning6;

import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.Set;

public class CollectionInjection {
	private Map<String, Object> map;
	private List<Object> list;
	private Set<Item> items;
	
	public Map<String, Object> getMap() {
		return map;
	}
	public void setMap(Map<String, Object> map) {
		this.map = map;
	}
	public List<Object> getList() {
		return list;
	}
	public void setList(List<Object> list) {
		this.list = list;
	}
	public Set<Item> getItems() {
		return items;
	}
	public void setItems(Set<Item> items) {
		this.items = items;
	}
	public CollectionInjection(Map<String, Object> map, List<Object> list, Set<Item> items) {
		super();
		this.map = map;
		this.list = list;
		this.items = items;
	}
	public CollectionInjection() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "CollectionInjection [map=" + map + ", list=" + list + ", items=" + items + "]";
	}
	
}

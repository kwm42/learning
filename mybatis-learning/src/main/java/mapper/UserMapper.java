package mapper;

import bean.User;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

public interface UserMapper {
    /**
     * 根据id查询用户
     * @param id
     * @return
     */
    User findById(Long id);

    /**
     * 根据密码，查询其中一个用户
     * @param password
     * @return
     */
    User findOneUserByPassword(String password); // 必须保证最多返回一条数据，否则会报 TooManyResultsException 错误。无数据，则返回null

    /**
     * 根据密码查询所有用户
     * @param password
     * @return
     */
    List<User> findByPassword(String password);
    /**
     * 下面的函数都是根据 name 和 password 查询用户
     */
    User findByNameAndPasswordV1(String name, String password);

    User findByNameAndPasswordV2(@Param("username") String name, @Param("password") String password);

    User findByNameAndPasswordV3(Map<String,Object> data);

    User findByNameAndPasswordV4(Map<String,Object> data, String password);

    User findByNameAndPasswordV5(@Param("data") Map<String,Object> data, @Param("password") String password);

    User findByNameAndPasswordV6(User user);

    User findByNameAndPasswordV7(@Param("user") User user);

    List<User> listUsersByPassword(@Param("password")String password,@Param("order") String order);

    Integer saveOneUser(@Param("user") User user);

    User findByName(@Param("name") String name, @Param("optionalPassword") String password);
}
package springboot.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {

    @GetMapping("/")
    public String index(){
        return "index";
    }

    @GetMapping("/rentable")
    public String indexRentable(){
        return "index-rentable";
    }

    @GetMapping("/books/donation")
    public String booksDonate(){
        return "books-donation";
    }

    @GetMapping("/books/return")
    public String booksReturn(){
        return "books-return";
    }

    @GetMapping("/books/detail")
    public String booksDetail(){
        return "books-detail";
    }




    @GetMapping("/user/login")
    public String userLogin(){
        return "UserAccount/user-loginPage";
    }

    @GetMapping("/signup")
    public String userSignup(){
        return "UserAccount/user-signUp";
    }

    @GetMapping("/signup/add")
    public String userSignupAdd(){
        return "UserAccount/user-signUp-additional";
    }

    @GetMapping("/welcome")
    public String welcome(){
        return "UserAccount/welcome";
    }


    @GetMapping("/mypage")
    public String userPage() {
        return "user-page";
    }

    @GetMapping("/mypage/donationinfo")
    public String userDona(){
        return "user-page-donation";
    }

    @GetMapping("/admin")
    public String adminIndex(){
        return "adminPage/admin-index";
    }
    @GetMapping("/admin/donation")
    public String adminDonate(){
        return "adminPage/admin-donation";
    }
    @GetMapping("/admin/return")
    public String adminReturn(){
        return "adminPage/admin-return";
    }

    @GetMapping("/admin/userlist")
    public String adminUserlist(){
        return "adminPage/admin-userlist";
    }
}

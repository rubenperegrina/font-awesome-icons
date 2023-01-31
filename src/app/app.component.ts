import { Component, OnInit } from '@angular/core';
import { faCoffee, faHome, faUser, faCheck, faImage, faPhone, faCircleXmark, faComment, faBolt } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faStar, faFaceAngry, faCalendar, faBookmark, faLemon, faFileExcel, faMoon, faCreditCard, faFolder, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram, faTwitter, faApple, faTiktok, faGithub, faYoutube, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  regularIconList = new Array;
  solidIconList = new Array;
  brandIconList = new Array;

  ngOnInit(): void {
    this.regularIconList.push(faHeart, faStar, faFaceAngry, faCalendar, faBookmark, faLemon, faFileExcel, faMoon, faCreditCard, faFolder, faPaperPlane);
    this.solidIconList.push(faCoffee, faHome, faUser, faCheck, faImage, faPhone, faCircleXmark, faComment, faBolt);
    this.brandIconList.push(faFacebook, faInstagram, faTwitter, faApple, faTiktok, faGithub, faYoutube, faGoogle, faLinkedin);
  }
}

import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from 'sweetalert2';
import Telegram from 'telegram-send-message';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent implements OnInit {

  customerData = { names: '', number: '', address: '', comments: '', friendname: '' };
  CustomerForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    AOS.init({
      duration: 1200,
    });
    this.createForm();
  }

  createForm() {
    this.CustomerForm = this.fb.group({
      names: ['', [Validators.required]],
      number: ['', [Validators.required]],
      address: ['', [Validators.required]],
      comments: ['', [Validators.required]]
    });
  }

  get f() {
    return this.CustomerForm.controls;
  }

  openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  closeForm(){
    document.getElementById("myForm").style.display = "none";
  }

  Submit() {
    console.log("DONE")
    this.submitted = true
    if (this.CustomerForm.invalid) {
      return;
    }
    Telegram.setToken("1123989255:AAHotkGGlKZLis7A6I4kS6kTYtiWdcR6wP8");
    Telegram.setRecipient(-1001201496893);
    Telegram.setMessage("Customer Name :" + this.CustomerForm.value.names + "     " +
      "Customer Number :" + this.CustomerForm.value.number + "     " +
      "Customer Address :" + this.CustomerForm.value.address + "     " +
      "Comments :" + this.CustomerForm.value.comments + "     " +
      "Referred Name :" + this.CustomerForm.value.friendname);
    Telegram.send();
    Swal.fire({
      type: 'success',
      title: "<h4 style='font-family:'serif'>Thank you for posting your details. Our Tailor shall get in touch with you soon</h4>",
      showConfirmButton: false,
      timer: 7000,
    })
    this.CustomerForm.reset();
    this.closeForm()
  }
  numberOnly(event): boolean {
    var charCode = (event.which) ? event.which : event.keyCode;
    if (charCode != 46 && charCode > 31
      && (charCode < 48 || charCode > 57))
      return false;

    return true;

  }
  toHome(){
    document.getElementById("banner").scrollIntoView({behavior:"smooth"});
  }
  toFeatures(){
    document.getElementById("feature").scrollIntoView({behavior:"smooth"})
  }
  toService(){
    document.getElementById("service").scrollIntoView({behavior:"smooth"})
  }
  toTestimonial(){
    document.getElementById("testimonial").scrollIntoView({behavior:"smooth"})
  }
  toContact(){
    document.getElementById("footer").scrollIntoView({behavior:"smooth"})
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEarthAsia } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Pharmacy } from '../../pharmacy';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-pharmacy-card',
  templateUrl: './pharmacy-card.component.html',
  styleUrls: ['./pharmacy-card.component.css'],
  standalone: true,
  imports: [NgIf, FontAwesomeModule, SharedModule],
})
export class PharmacyCardComponent implements OnInit {
  @Input() pharmacy: Pharmacy = {
    name: '',
    postalcode: '',
    address: '',
    tel: '',
    memo_openinghours: '',
    emergency_contact: '',
    emergency_contact_phone: '',
    location: {
      lat: 0,
      lng: 0,
    },
  };

  readonly regexpPhoneNumber =
    /(0(\d{1}-\d{4}|\d{2}-\d{3}|\d{3}-\d{2}|\d{4}-\d{1})-\d{4}|0[5789]0-\d{4}-\d{4}|0120-\d{3}-\d{3})/;

  isEmergencyContact = false;

  faEarthAsia = faEarthAsia;
  faPhone = faPhone;
  faArrowUpRightFromSquare = faArrowUpRightFromSquare;

  ngOnInit() {
    this.isEmergencyContact = this.regexpPhoneNumber.test(this.pharmacy.emergency_contact_phone);
  }
}

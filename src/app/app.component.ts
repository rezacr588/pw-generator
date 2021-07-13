import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = ""
  includeLetters = false
  includeNumbers = false
  includeSymbols = false
  length = 0
  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters
  }
  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers
  }
  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols
  }
  onChangeLength(event: Event) {
    const parsedValue = parseInt((<HTMLInputElement>event.target).value)
    if(!isNaN(parsedValue)) this.length = parsedValue
  }
  onButtonClick() {
    const numbers = "0123456789"
    const letters = "abcdefghijklmnopqrstuzwxyz"
    const symbols = "~!@#$%^&*()-+_="
    let validChar = ""
    if (this.includeLetters) validChar += letters
    if (this.includeSymbols) validChar += symbols
    if (this.includeNumbers) validChar += numbers
    let generatedPassword = ""
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChar.length)
      generatedPassword += validChar[index]
    }
    this.password = generatedPassword
  }
}

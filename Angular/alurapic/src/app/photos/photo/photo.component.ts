import { Component, Input } from '@angular/core';

@Component({
    selector: 'ap-photo',
    templateUrl: 'Photo.Component.html'
})
export class PhotoComponent {
    @Input() description = '';
    @Input() url = '';
}
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorComponent } from './director.component';

import { StringReplacePipe } from '../string-replace.pipe';

import { RouterTestingModule } from '@angular/router/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DirectorComponent', () => {
  let component: DirectorComponent;
  let fixture: ComponentFixture<DirectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, BrowserAnimationsModule ],
      declarations: [ DirectorComponent,  StringReplacePipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('get director line', () => {
  let component: DirectorComponent;
  let fixture: ComponentFixture<DirectorComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    this.router.navigateByUrl('profile/dom');
  });

  it('director should retrieve correct line based on route', () => {
    expect(this.line.title).toBe('Profile retrieved. Is there anything else I can do for you?');
  });
});

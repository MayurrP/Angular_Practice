import { ComponentFixture, TestBed,async } from '@angular/core/testing';
import { UserServiceMock } from './Mocks/user.service.mock';

import { UserComponent } from './user.component';
import { UserService } from './user.service';

describe('UserComponent', () => {
  let comp: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
      providers :[
        { provide : UserService, useClass : UserServiceMock}
      ]
    }).compileComponents().then(()=>{
      fixture = TestBed.createComponent(UserComponent);
    comp = fixture.componentInstance;
    });
    
  }));

  it('should have one user', async(() => {
    expect(comp.users.length).toEqual(1);
  }));

  it('html should render one user', async(() => {
    fixture.detectChanges();
    const e1 = fixture.nativeElement.querySelector('p');
    expect(e1.innerText).toContain('user1');
  }));
});

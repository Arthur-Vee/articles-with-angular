import { FilterPipe } from './filter.pipe';
import { DomSanitizer } from '@angular/platform-browser'; // Import DomSanitizer

describe('FilterPipe', () => {
  it('create an instance', () => {
    const sanitizerMock = jasmine.createSpyObj<DomSanitizer>('DomSanitizer', ['bypassSecurityTrustHtml']);

    const pipe = new FilterPipe(sanitizerMock);
    expect(pipe).toBeTruthy();
  });
});

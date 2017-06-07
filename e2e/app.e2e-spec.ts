import { FormsPage } from './app.po';

describe('forms App', () => {
  let page: FormsPage;

  beforeEach(() => {
    page = new FormsPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

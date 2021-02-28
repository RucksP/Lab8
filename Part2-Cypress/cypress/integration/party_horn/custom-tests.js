describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/index.html');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then( $el => {
        expect($el).to.have.value(75);
    });
  });

  it('Volume changes when slider input changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then( $el => {
        expect($el).to.have.value(33);
    });
  });

  it('Check audio volume changes when slider input changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then( $el => {
        expect($el).to.have.prop('volume', 0.33);
    });
  });

  it('Test if the image and sound sources change when you select the party horn radio button', () => {
    cy.get('#radio-party-horn').check();
    cy.get('#sound-image').then( $el => {
        expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
    });
    cy.get('#horn-sound').then( $el => {
      expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');
    });
  });

  describe('Test if the volume image changes when increasing volumes', () => {
    it('level-0', () => {
      cy.get('#volume-number').clear().type('0');
      cy.get('#volume-image').then( $el => {
        expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
      });
    });
    it('level-1', () => {
      cy.get('#volume-number').clear().type('1');
      cy.get('#volume-image').then( $el => {
        expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
      });
    });
    it('level-2', () => {
      cy.get('#volume-number').clear().type('34');
      cy.get('#volume-image').then( $el => {
        expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
      });
    });
    it('level-3', () => {
      cy.get('#volume-number').clear().type('670');
      cy.get('#volume-image').then( $el => {
        expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
      });
    });
  });

  describe('Test if the honk button is disabled when the textbox input is a empty or a non-number', () => {
    it('empty', () => {
      cy.get('#volume-number').clear();
      cy.get('#honk-btn').then( $el => {
        expect($el).to.have.attr('disabled', 'disabled');
      });
    });
    it('non-number', () => {
      cy.get('#volume-number').clear().type('aysfu');
      cy.get('#honk-btn').then( $el => {
        expect($el).to.have.attr('disabled', 'disabled');
      });
    });
  });

  it('Test if an error is shown when you type a number outside of the given range for the volume textbox input', () => {
    cy.get('#volume-number').clear().type('101');
    cy.get('input:invalid').should('have.length', 1);
  });



});

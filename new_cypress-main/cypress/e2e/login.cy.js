import * as data from "../helpers/default_data.json"
import * as main_page from "../locators/main_page.json";
import * as recovery_password_page from "../locators/recovery_password_page.json"
import * as result_page from "../locators/result_page.json"

describe ('Проверка авторизации', function() {

    beforeEach('Начало теста', function () {
         cy.visit('/');
         cy.get(main_page.fogot_pass_btn).should('have.css', 'color', 'rgb(0, 85, 152)');
           });

            afterEach('Конец теста', function () {
         cy.get(result_page.close).should('be.visible');
        });

    it('Верный пароль и верный логин', function (){
        cy.visit('/');// зашли на сайт
        cy.get(main_page.email).type(data.login);// верный логин
        cy.get(main_page.password).type(data.password);//верный пароль
        cy.get(main_page.login_button).click();// нажатие кнопки войти
        cy.get(result_page.title).contains('Авторизация прошла успешно');// проверяю текст
        cy.get(result_page.title).should('be.visible');//текст виден  пользователю

    })

      it('Неверный пароль и верный логин', function (){
        cy.visit('/');// зашли на сайт
        cy.get(main_page.email).type(data.login);// верный логин
        cy.get(main_page.password).type('qa_one_love3');// неверный пароль
        cy.get(main_page.login_button).click();// нажатие кнопки войти
        cy.get(result_page.title).contains('Такого логина или пароля нет');// проверяю текст
        cy.get(result_page.title).should('be.visible');//текст виден  пользователю

    })
    it('Верный пароль и неверный логин', function (){
        cy.visit('/');// зашли на сайт
        cy.get(main_page.email).type('german@dolnikov.su');// неверный логин
        cy.get(main_page.password).type(data.password);// верный пароль
        cy.get(main_page.login_button).click();// нажатие кнопки войти
        cy.get(result_page.title).contains('Такого логина или пароля нет');// проверяю текст
        cy.get(result_page.title).should('be.visible');//текст виден  пользователю

    })

       it('Верный пароль и логин без @', function (){
        cy.visit('/');// зашли на сайт
        cy.get(main_page.email).type('germandolnikov.su');// неверный логин
        cy.get(main_page.password).type(data.password);// верный пароль
        cy.get(main_page.login_button).click();// нажатие кнопки войти
        cy.get(result_page.title).contains('Нужно исправить проблему валидации');// проверяю текст
        cy.get(result_page.title).should('be.visible');//текст виден  пользователю
        
    })

       it('Верный пароль и логин c заглавными буквами', function (){
        cy.visit('/');// зашли на сайт
        cy.get(main_page.email).type('GerMan@Dolnikov.su');// верный логин
        cy.get(main_page.password).type(data.password);// верный пароль
        cy.get(main_page.login_button).click();// нажатие кнопки войти
        cy.get(result_page/title).contains('Авторизация прошла успешно');// проверяю текст
        cy.get(result_page.title).should('be.visible');//текст виден  пользователю
        
    })
})

import {test,expect} from '../fixtures/fixture';
import { CatalogPage } from '../pages/CatalogPage';
import { LoginPage } from '../pages/LoginPage';

test.use({ storageState: 'playwright/.auth/user.json' });

test('add smartphone to cart',async({catalogPage,loginPage})=>{

    
    await catalogPage.goToShopNow();

     await catalogPage.addCart();

     const phonePrice = await catalogPage.price().textContent();

     console.log('Smartphone price: ',phonePrice);

     expect(phonePrice).toBe('₹25,000');


})

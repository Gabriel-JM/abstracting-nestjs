import { adaptRoute } from '../adapters/nest-route-adapter';
import { makeCreateCustomerController } from '../factories/controllers';
import { makePaymentProfileController } from '../factories/controllers/payment-profile-controller-factory';

const topic = 'customer.customer.create.command';

adaptRoute(makeCreateCustomerController(), { topic });

adaptRoute(makePaymentProfileController(), {
  topic: 'customer.customer.payment-profile.create.command',
});

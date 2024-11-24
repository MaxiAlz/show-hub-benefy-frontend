import { useMutation } from '@tanstack/react-query';
import { purchaseEventProductsRepository } from '../repositories/pourchaseEventProductsRepository';
import { PurchaseEventProductsPayload } from '../types/homeTypes';

export const usePurchaseEventProductsMutation = (eventId: number) => {
  return useMutation({
    mutationFn: async (payload: PurchaseEventProductsPayload) => {
      return await purchaseEventProductsRepository.purchaseEventProducts(
        eventId,
        payload,
      );
    },
  });
};

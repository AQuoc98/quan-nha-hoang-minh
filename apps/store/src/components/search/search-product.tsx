'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { IoMdClose, IoIosSearch } from 'react-icons/io';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  Input,
} from '@org/shared';
import { useSearchContext } from '../../utils/contexts/SearchContext';

interface IFormInput {
  product: string;
}

export default function SearchProduct() {
  const { searchState, dispatch } = useSearchContext();

  const form = useForm({
    defaultValues: {
      product: '',
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (values) => {
    dispatch({ type: 'SET_PRODUCT_SEARCH', payload: values.product });
  };

  const clearForm = () => {
    form.reset();
    dispatch({ type: 'RESET_PRODUCT_SEARCH' });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="pt-4">
        <FormField
          control={form.control}
          name="product"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center min-h-12 border border-gray-200 rounded-lg px-3">
                <IoIosSearch className="size-6 text-muted-foreground" />
                <FormControl>
                  <Input
                    placeholder="Tìm kiếm sản phẩm"
                    {...field}
                    className="border-none shadow-none focus-visible:ring-0"
                  />
                </FormControl>
              </div>
              {searchState.product && (
                <div className="mt-2 flex items-center gap-2">
                  <p className="text-sm">
                    Kết quả tìm kiếm{' '}
                    <span className="font-bold">{searchState.product}</span>
                  </p>
                  <IoMdClose className="text-sm" onClick={clearForm} />
                </div>
              )}
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

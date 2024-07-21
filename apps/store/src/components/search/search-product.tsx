'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { IoMdClose, IoIosSearch } from 'react-icons/io';
import { Form, FormControl, FormField, FormItem, Input } from '@org/shared';
import { cn } from '@org/shared/utils';
import { SearchActionType, useSearchContext } from '../../utils/contexts/SearchContext';

type Inputs = {
  product: string;
};

export default function SearchProduct() {
  const { searchState, dispatch } = useSearchContext();

  const form = useForm({
    defaultValues: {
      product: '',
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch({ type: SearchActionType.SetProductSearch, payload: data.product });
  };

  const clearForm = () => {
    form.reset();
    dispatch({ type: SearchActionType.ResetProductSearch });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="product"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center min-h-12 border border-gray-200 rounded-lg px-3 group">
                <IoIosSearch
                  className={cn('size-6 text-muted-foreground group-focus-within:text-red-500')}
                />
                <FormControl>
                  <Input
                    placeholder="Tìm kiếm sản phẩm"
                    className="border-none shadow-none focus-visible:ring-0 caret-red-500"
                    {...field}
                  />
                </FormControl>
              </div>
            </FormItem>
          )}
        />
        {searchState.product && (
          <div className="mt-2 flex items-center gap-1">
            <p className="text-sm truncate">
              Kết quả tìm kiếm <span className="font-bold">{searchState.product}</span>
            </p>
            <IoMdClose className="text-sm text-red-500" onClick={clearForm} />
          </div>
        )}
      </form>
    </Form>
  );
}

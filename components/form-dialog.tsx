"use client";

import React, { useState } from "react";

import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

import Image from "next/image";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useUpdateDetails } from "@/hooks/use-update-details";
import { toast } from "sonner";

const formSchema = z.object({
  rank: z.coerce
    .number({ message: "Must be between 1 and 1000" })
    .int({ message: "Must be a whole number" })
    .min(1, { message: "Must be between 1 and 1000" })
    .max(1000, { message: "Must be between 1 and 1000" }),
  percentile: z.coerce
    .number({ message: "Must be between 0 and 100" })
    .min(0, { message: "Must be between 0 and 100" })
    .max(100, { message: "Must be between 0 and 100" }),
  score: z.coerce
    .number({ message: "Must be between 0 and 15" })
    .int({ message: "Must be a whole number" })
    .min(0, { message: "Must be between 0 and 15" })
    .max(15, { message: "Must be between 0 and 15" }),
});

const FormDialog = () => {
  const { addDetails, isUpdated, rank, score, percentile } = useUpdateDetails();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const defaultValues = isUpdated
    ? {
        rank: rank,
        percentile: percentile,
        score: score,
      }
    : {
        rank: 0,
        percentile: 0,
        score: 0,
      };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    addDetails(values);
    setIsOpen(false);
    toast.success("Details updated successfully.");
  };

  const handleReset = () => {
    form.reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-700 text-white rounded-lg px-6 py-6 text-lg hover:bg-blue-700/80">
          Update
        </Button>
      </DialogTrigger>
      <DialogContent className="lg:min-w-[50vw] py-10 lg:py-8 px-10">
        <DialogHeader className="flex flex-col w-full">
          <div className="flex flex-row w-full justify-between items-start lg:items-center">
            <DialogTitle className="text-2xl text-black tracking-tight font-bold">
              Update Scores
            </DialogTitle>
            <Image
              src={`/images/html5.png`}
              alt="html5"
              width="36"
              height="36"
            />
          </div>
          <DialogDescription className="font-xl text-start">
            Update your information.
          </DialogDescription>
        </DialogHeader>
        <div className="pt-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-8"
            >
              <FormField
                control={form.control}
                name="rank"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-1 gap-y-2 lg:grid-cols-2">
                    <div className="col-span-1 flex flex-row gap-x-4 items-center">
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                        1
                      </div>
                      <FormLabel className="text-xl">Rank</FormLabel>
                    </div>
                    <div className=" col-span-1 flex flex-col gap-y-2">
                      <FormControl>
                        <Input placeholder="42" {...field} />
                      </FormControl>
                      <FormDescription>Your Rank.</FormDescription>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="percentile"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-1 gap-y-2 lg:grid-cols-2">
                    <div className="col-span-1 flex flex-row gap-x-4 items-center">
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                        2
                      </div>
                      <FormLabel className="text-xl">Percentile</FormLabel>
                    </div>
                    <div className=" col-span-1 flex flex-col gap-y-2">
                      <FormControl>
                        <Input placeholder="87" {...field} />
                      </FormControl>
                      <FormDescription>Your Percentile.</FormDescription>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="score"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-1 gap-y-2 lg:grid-cols-2">
                    <div className="col-span-1 flex flex-row gap-x-4 items-center">
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                        3
                      </div>
                      <FormLabel className="text-xl">Score</FormLabel>
                    </div>
                    <div className=" col-span-1 flex flex-col gap-y-2">
                      <FormControl>
                        <Input placeholder="13" {...field} />
                      </FormControl>
                      <FormDescription>Your Score.</FormDescription>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <div className="flex flex-row justify-end gap-x-8">
                <Button
                  className="w-36 h-14 text-xl bg-blue-600 hover:bg-blue-600/30"
                  type="submit"
                >
                  Submit
                </Button>
                <Button
                  variant="destructive"
                  type="button"
                  className="w-36 h-14 text-xl"
                  onClick={handleReset}
                >
                  Reset
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FormDialog;

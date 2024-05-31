"use client"
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger, 
} from "@/components/ui/dialog";
import { useAccount} from 'wagmi'
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button";



export const Testdata = () => {
    const { address } = useAccount()
    // console.log(address)
   
    const [gametag , setGametag] = useState('')
    const [amoundToken , setAmoundToken] = useState('')


  return (
    <>
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent >
          <DialogHeader className="flex gap-4" >
            <DialogTitle>Enter The Data</DialogTitle>
            <DialogDescription>
               <div>
                 <form className="flex flex-col gap-4">
                   <ul>Address - <span>{address || 'Connect Wallet'}</span></ul>
                   <ul className="flex gap-2" >Game Tag - <span>
                    <Input 
                    onChange={(e) => setGametag(e.target.value)} 
                    placeholder="GTF7480"
                    />
                    </span> </ul>
                   <ul className="flex gap-2" >Amount - $<span>
                    <Input 
                    onChange={(e) => setAmoundToken(e.target.value)} 
                    placeholder="69"
                    />
                    </span> </ul>
                   <span className="flex justify-end">
                   <Button className="w-[120px]">Submit</Button>
                   </span>
                 </form>
               </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

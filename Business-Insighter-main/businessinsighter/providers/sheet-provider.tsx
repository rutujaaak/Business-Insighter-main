"use client"

import { useMountedState } from "react-use";

import { NewAccountSheet } from "@/features/accounts/components/new-account-sheet";
import { EditAccountSheet } from "@/features/accounts/components/edit-account-sheet";

import { NewCategorySheet } from "@/features/categories/components/new-category-sheet";
import { EditCategorySheet } from "@/features/categories/components/edit-category-sheet";

import { NewTransactionSheet } from "@/features/transactions/components/new-transaction-sheet";
import { EditTransationSheet } from "@/features/transactions/components/edit-transation-sheet";

export const SheetProvider = () => {

    const isMouted = useMountedState();

    if(!isMouted) return null;

    return (
        <>
            <NewAccountSheet />
            <EditAccountSheet />

            <NewCategorySheet />
            <EditCategorySheet />

            <NewTransactionSheet />
            <EditTransationSheet />
        </>
    );
};
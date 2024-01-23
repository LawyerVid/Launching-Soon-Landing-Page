"use client"
import React from 'react'
import store, { RootState } from '#/state/store';
import { connect } from 'react-redux';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog';
import { showLogoutModal } from '#/state/slices/notifications';
import { Button } from '../ui/button';

interface LogoutModalProps {
    open: boolean
}


const connector = connect((state: RootState, props: any) => ({
    open: state.notifications.modals.logout,
    props: props
}))

const LogoutModal = connector(({ open }: LogoutModalProps) => {
    const close = (open: boolean) => {
        if (!open) {
            store.dispatch(showLogoutModal(false))
        }
    }

    const handleLogout = async () => {
        /* setLoadingState(true) */
        /* await signOut() */
        /* close(false) */
        /* setLoadingState(false) */
    }

    return (
        <Dialog
            onOpenChange={close}
            open={open}
        >
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Logout</DialogTitle>
                    <DialogDescription>
                        Are you sure?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button variant="ghost" onClick={() => close(false)}>Cancel</Button>
                    <Button onClick={handleLogout}>Logout</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
})


LogoutModal.displayName = "LogoutModal"


export default LogoutModal;


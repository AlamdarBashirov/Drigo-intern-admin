import type React from 'react'
import styles from './ConfirmModal.module.scss'

type ConfirmModalType = {
    isOpen: boolean,
    title: string,
    children: React.ReactNode,
    onClose: () => void,
    onConfirm: () => void
}
const ConfirmModal = ({ isOpen, title, children, onClose, onConfirm }: ConfirmModalType) => {

    if (!isOpen) {
        return null
    }
    return (
        <div className={styles.overlay}>
            <div className={styles.confirmModal}>
                <div className={styles.modalHeader}>
                    <h2>{title}</h2>
                    <button onClick={onClose} className={styles.closeBtn}>Close</button>
                </div>
                <div className={styles.modalContent}>
                    {children}
                </div>
                <div className={styles.actions}>
                    <button onClick={onClose} className={styles.cancel}>Cancel</button>
                    <button onClick={onConfirm} className={styles.confirm}>Confirm</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal
import type { ComponentProps } from 'react'

// Small, plain-CSS primitives following shadcn's variant/composition conventions.
// No interactive primitive library is needed for this static presentation.
export function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export function Badge({ className, variant = 'outline', ...props }: ComponentProps<'span'> & {
  variant?: 'outline' | 'secondary'
}) {
  return <span data-slot="badge" data-variant={variant} className={cn('badge', className)} {...props} />
}

export function Separator() {
  return <div className="separator" data-slot="separator" role="none" />
}

export function buttonVariants({ variant = 'default' }: { variant?: 'default' | 'link' } = {}) {
  return cn('button', variant === 'link' && 'button-link')
}

"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group animate__animated animate__fadeInUp"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-gradient-to-r group-[.toaster]:from-primary group-[.toaster]:to-primary-dark group-[.toaster]:text-primary-foreground group-[.toaster]:border-none group-[.toaster]:shadow-lg group-[.toast]:animate__animated group-[.toast]:animate__bounceInUp",
          description: "group-[.toast]:text-primary-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground group-[.toast]:hover:bg-primary-dark group-[.toast]:rounded-full group-[.toast]:px-4 group-[.toast]:py-2 group-[.toast]:transition-colors group-[.toast]:duration-300",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground group-[.toast]:hover:bg-muted-dark group-[.toast]:rounded-full group-[.toast]:px-4 group-[.toast]:py-2 group-[.toast]:transition-colors group-[.toast]:duration-300",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
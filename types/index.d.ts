declare module "*.svg" {
  import { HTMLAttributes } from "react"
  const value: React.ComponentType<HTMLAttributes<SVGElement>>
  export default value
}

declare module "*.css" {
  const content: { [key: string]: string }
  export default content
}

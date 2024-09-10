const DashboardLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
<div className="h-full">{children}
    <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        
    </div>
</div>
    )
}
export default DashboardLayout
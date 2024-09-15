import {SignUp} from '@clerk/nextjs';
// import {UserButton} from "@clerk/nextjs";

export default function Page() {
	return (
		<div className="h-full flex items-center justify-center">
			<SignUp/>
			{/* <UserButton  afterSwitchSessionUrl="/" /> */}
		</div>
	);
}
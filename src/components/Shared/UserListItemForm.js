import { getUserById } from "../../App"
import { withEditableUser }  from "../withEditableUser"


export const UserListItemForm = withEditableUser(({
    user,
    onChange,
    onSave,
    onReset,
}) => {
    return user ? (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <form>
                <input type="text" name="firstName" placeholder="First Name" defaultValue={user.firstName} onChange={e => onChange({ firstName: e.target.value })} />
                <input type="text"name="lastName" placeholder="Last Name" defaultValue={user.lastName} onChange={e => onChange({ lastName: e.target.value })} />
                <input type="email"name="email" placeholder="Email" defaultValue={user.email} onChange={e => onChange({ email: e.target.value })} />
                <div style={{ display: 'flex', gap: 10 }}>
                    <button type="button" onClick={onSave}>Submit</button>
                    <button type="button" onClick={onReset}>Reset</button>
                </div>
            </form>
        </div>
    ) : <div> Loading...</div>
}, () => getUserById(1));
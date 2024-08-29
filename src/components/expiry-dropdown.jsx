import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function ExpiryDropdown({ expiry, setExpiry }) {
  return (
    <Select value={expiry === 0 ? undefined : expiry} onValueChange={setExpiry}>
      <SelectTrigger className="w-36">
        <SelectValue placeholder="Expire after..." />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="600">10 minutes</SelectItem>
        <SelectItem value="3600">1 hour</SelectItem>
        <SelectItem value="21600">6 hours</SelectItem>
        <SelectItem value="86400">24 hours</SelectItem>
        <SelectItem value="-1">Never</SelectItem>
      </SelectContent>
    </Select>
  );
}
